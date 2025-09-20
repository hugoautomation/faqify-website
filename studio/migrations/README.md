# Navigation to Header/Footer Migration

This migration moves data from the old navigation documents to the new header and footer singleton documents using Sanity's `sanity migration` command and built-in migration API.

## What This Migration Does

The migration will:

1. **Move navigation with title 'header'** → Create a `header` document with the links in the `links` array
2. **Move navigation with title 'header action'** → Add the links to the `header` document's `ctaLinks` array
3. **Move navigation with title 'footer'** → Create a `footer` document with the links in the `links` array
4. **Move navigation with title 'footer bottom'** → Add the links to the `footer` document's `bottomLinks` array

**Note:** After running this migration, you'll need to manually delete the old navigation documents that were migrated.

## Important Notes

- Header and Footer are singleton documents (only one of each will be created)
- The migration preserves the exact same structure for the links arrays
- Navigation documents with other titles will be left unchanged
- The migration is idempotent - it's safe to run multiple times

## Prerequisites

1. **Backup your data** before running any migration:

   ```bash
   cd studio
   npx sanity dataset export production backup-$(date +%Y%m%d-%H%M%S).tar.gz
   ```

## Running the Migration

```bash
cd studio

# Step 1: List available migrations to get the migration ID
npx sanity migration list

# Step 2: Dry run first to preview changes (recommended)
npx sanity migration run <ID>

# Step 3: When ready to apply changes
npx sanity migration run <ID> --no-dry-run
```

Replace `<ID>` with the migration ID from the list command (e.g., `navigation-to-header-footer`).

## What to Expect

The migration will output:

- Number of navigation documents processed
- Confirmation when header/footer documents are created
- Success or error messages

Example output:

```
📎 Collected header navigation data (6 links)
🔗 Collected header action data (2 CTA links)
🦶 Collected footer navigation data (5 links)
📍 Collected footer bottom data (2 bottom links)
✅ Created header document
✅ Created footer document
Migration completed successfully
```

## Verification

After running the migration, verify:

1. **Check the new documents exist:**
   - Go to Sanity Studio → Content → Header (should exist with links)
   - Go to Sanity Studio → Content → Footer (should exist with links and bottomLinks)

2. **Check the old navigation documents still exist:**
   - Go to Sanity Studio → Content → Navigation
   - You should still see the navigation documents that were migrated (these need manual cleanup)

3. **Test your frontend:**
   - Ensure header navigation works correctly
   - Ensure footer navigation works correctly

4. **Clean up old navigation documents:**
   - Go to Sanity Studio → Content → Navigation
   - Manually delete the navigation documents with titles: "header", "header action", "footer", "footer bottom"
   - Keep any other navigation documents you still need

## Rollback (if needed)

If you need to rollback:

1. **Restore from backup:**

   ```bash
   cd studio
   npx sanity dataset import backup-YYYYMMDD-HHMMSS.tar.gz --replace
   ```

2. **Or manually recreate navigation documents** from the header/footer data if needed.

## Files in this Migration

- `navigation-to-header-footer.ts` - The migration script
- `README.md` - This documentation

## Troubleshooting

**Error: "No navigation documents found"**

- This is normal if you've already run the migration or don't have the expected navigation documents

**Error: Migration fails partway through**

- Check your Sanity credentials and connection
- Ensure you have write permissions to the dataset
- Review any error messages in the console

**Links not appearing correctly**

- Verify the link structure matches between your navigation and header/footer schemas
- Check that the link and link-group types are properly defined

## Need Help?

If you encounter any issues:

1. Check the console output for detailed error messages
2. Verify your navigation documents have the expected titles
3. Ensure your header and footer schemas match the expected structure
4. Contact your development team for assistance
