# Bill Book — Agrawal Steel Structures

A phone app for making GST tax invoices in the Agrawal Steel Structures format. It opens in any phone browser with no login, works offline, and can be added to the home screen like an app.

**Open the app:** https://divyagrawal1604-png.github.io/Agrawal-Fabrication-App-Link/

## Using it
- **Bill tab:** fill the bill. Place of supply decides the tax: Rajasthan gives CGST + SGST, any other state gives one IGST line.
- **Download PDF** or **Share PDF** (WhatsApp, Gmail, Google Drive). Either one saves the bill, and the next bill number moves up automatically.
- **Saved tab:** old bills. Open, copy as new, re-download or delete.
- **Business tab:** your details, logo, signature, defaults, saved customers, and **Backup**.

## Where your data is kept
Bills, customers and business details are stored **only on the phone**, in that browser. Nothing is uploaded and no one else can see it.
- Tap **Business → Download backup** regularly and keep the file in Google Drive.
- To move to a new phone, open the app there and use **Restore from backup**.
- Clearing the browser's site data deletes the bills on that phone, so keep backups.

## Files
`index.html` is the whole app. `sw.js` makes it work offline. `vendor/` has the PDF library and `fonts/` the invoice fonts.
