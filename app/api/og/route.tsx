import { ImageResponse } from "next/og";
import {
  fetchSanityPostBySlug,
  fetchSanityPageBySlug,
  fetchSanitySettings,
} from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

async function getTtfFont(
  family: string,
  axes: string[],
  value: number[]
): Promise<ArrayBuffer> {
  const familyParam = `${axes.join(",")}@${value.join(",")}`;
  // Get css style sheet with user agent Mozilla/5.0 Firefox/1.0 to ensure non-variable TTF is returned
  const cssCall = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:${familyParam}&display=swap`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 Firefox/1.0",
      },
    }
  );
  const css = await cssCall.text();
  const ttfUrl = css.match(/url\(([^)]+)\)/)?.[1];
  if (!ttfUrl) {
    throw new Error("Failed to extract font URL from CSS");
  }
  return await fetch(ttfUrl).then((res) => res.arrayBuffer());
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return new Response("Missing slug parameter", { status: 400 });
    }

    const post = await fetchSanityPostBySlug({ slug });
    const page = await fetchSanityPageBySlug({ slug });
    const settings = await fetchSanitySettings();

    if (!post && !page) {
      return new Response("Post or page not found", { status: 404 });
    }

    // Load Poppins fonts with different weights
    const [poppinsRegular, poppinsBold] = await Promise.all([
      getTtfFont("Poppins", ["wght"], [400]),
      getTtfFont("Poppins", ["wght"], [700]),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              border: "1px solid black",
            }}
          >
            {/* Left Content */}
            <div
              style={{
                display: "flex",
                padding: 48,
                flexDirection: "column",
                borderRight: "1px solid black",
                width: "66%",
              }}
            >
              {/* Title */}
              <div
                style={{
                  fontSize: 64,
                  fontWeight: "bold",
                  lineHeight: 1.1,
                  padding: "24px 0",
                  borderBottom: "1px solid black",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "3",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {post?.title || page?.meta_title}
                </div>
              </div>

              {/* Description */}
              <div
                style={{
                  fontSize: 24,
                  padding: "24px 0",
                  flex: 1,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
              >
                {post?.meta_description || page?.meta_description}
              </div>
              {/* Author section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginTop: "auto",
                  padding: "24px 0",
                }}
              >
                {post?.author?.image && post.author.image.asset?._id && (
                  <img
                    src={urlFor(post.author.image)
                      .format("jpg")
                      .width(48)
                      .height(48)
                      .fit("crop")
                      .url()}
                    alt={post.author.name || ""}
                    width="48"
                    height="48"
                    style={{
                      border: "1px solid black",
                      filter: "grayscale(100%)",
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {post?.author?.name && (
                    <div style={{ fontWeight: 500 }}>{post.author.name}</div>
                  )}
                  {post && (
                    <div style={{ color: "#666" }}>
                      {new Date(post?._createdAt as string).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content - Pattern */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 48,
                width: "34%",
                background:
                  "repeating-linear-gradient(45deg, #f6f6f6 0px, #f6f6f6 2px, transparent 2px, transparent 8px)",
              }}
            >
              {settings?.logo && settings.logo.asset?.url && (
                <img
                  src={settings.logo.asset.url}
                  alt={settings.logo.alt || ""}
                  width={200}
                  height={50}
                />
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Poppins",
            data: poppinsRegular,
            style: "normal",
            weight: 400,
          },
          {
            name: "Poppins",
            data: poppinsBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
