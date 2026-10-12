# Demo request form: how it works

The `/demo/` page has our own form (native HTML, styled like the site). When someone submits it, the browser sends the answers straight to a Google Form, so every request lands in the form's linked Google Sheet. The Google Form is only the inbox; visitors never see it.

## How it is wired

| Piece | Where |
|---|---|
| Field list (labels, types, options, `entry.` IDs) | `website-static/src/_data/demoForm.json` |
| Markup (loops over the field list) | `website-static/src/demo/index.njk` |
| Submit script (validation, send, success or error, analytics) | `website-static/src/js/lead-form.js` |
| Styles | `.lead*` in `website-static/src/css/site.css` |

Submission: `fetch` POST to `https://docs.google.com/forms/d/e/<FORM_ID>/formResponse` with `entry.<id>=value` pairs plus `fvv=1` and `pageHistory=0`, using `mode: "no-cors"`.

## Field map (current form)

| Our field | Google entry | Type | Required |
|---|---|---|---|
| Company name | `entry.1098891983` | Short answer | Yes |
| City and state | `entry.1984688009` | Short answer | Yes |
| Your name | `entry.1365847242` | Short answer | Yes |
| Your role | `entry.1738014259` | Dropdown | Yes |
| Work email | `entry.1478875519` | Short answer (email) | Yes |
| Phone or WhatsApp number | `entry.77813101` | Short answer (number pattern) | Yes |
| Approximate number of open jobs | `entry.1131442109` | Dropdown | Yes |
| What do you do mostly | `entry.875512129` | Checkboxes (several values) | No |
| What would you like to see in the demo | `entry.179720708` | Paragraph | No |

Dropdown and checkbox values must match the Google Form option text exactly, otherwise Google rejects or drops the answer.

## Changing the form later

1. Edit the question in the Google Form first.
2. Get its new entry ID: open the live form, view page source, search `FB_PUBLIC_LOAD_DATA_`; or use the form's "Get pre-filled link" and read the `entry.NNN` names.
3. Update `demoForm.json` (label, type, options, entry ID). The page rebuilds from it.
4. If you add a required question in Google, add the same field here, or submissions will be rejected.

## Settings in Google

- Responses tab: click the green Sheets icon to link a Google Sheet.
- Responses tab, three dots: **Get email notifications for new responses**, or add a team address as collaborator.
- "Limit to 1 response" and "Require sign-in" must stay **off**, otherwise anonymous posts are refused.
- Keep sheet sharing limited to the demo team.

## Analytics

On a successful send the script fires GA4 event `generate_lead` (with `form_id`, `jobs_band`, `role`) and a Clarity event `demo_request_submitted`. In GA4: Admin, Events, mark `generate_lead` as a key event.

## Limits to know

- `no-cors` returns an opaque response, so the page cannot read Google's reply. It treats "the request left the browser" as success and shows the error panel (with the email fallback) only on a network failure. If you change the Google Form and a field mismatches, the page can still show success while Google drops the row, so always run the test below after any form change.
- A honeypot field (`website`) quietly drops simple bots. If spam grows, add Cloudflare Turnstile.
- Without JavaScript the form posts into a hidden frame and the page shows a mailto line; the email address on the page is the fallback.

## Test before launch

- Submit one real test from desktop and one from a phone.
- Confirm the row appears in the Sheet with every column filled (check the multi-select and the dropdowns).
- Confirm the notification email arrives, and the GA4 DebugView shows `generate_lead`.
- Delete the test rows.