# Healthy Schools tracker (demo)

Live demo: https://drgnnithin96-gif.github.io/health-monitoring-demo/

A session tracker I built for the Healthy Schools Program at Arogya World India Trust. The programme teaches diabetes prevention to students in Classes 6 and 7 through 10 activities over two years, run in government schools by field coordinators from partner NGOs.

Coordinators used to report each session by posting a photo in a WhatsApp group. There was no reliable way to tell if a photo was reused, if the coordinator was at the school, or if the student counts were right. This tracker replaces that:

- **Coordinator app** (`healthy-schools/field/`): log a session with school, class, activity number, students present and a photo. Time and location are recorded. Sessions that could not be held are logged with a reason.
- **Manager dashboard** (`healthy-schools/dashboard/`): review each session and decide whether it counts, flag sessions back to the partner NGO, and see an activity register of every class against the 10 activities.

The app adds a note when a session is logged more than 150 m from the school, lasts under 30 minutes, uses a photo already sent, reports more students than are enrolled, or comes less than 15 days after the class's last activity.

## About this copy

All schools, names, numbers and photos here are made up. There are no logins: both pages open with sample data, and anything entered stays in the visitor's browser. Coordinator app sample PIN: `1234`.

The live version uses a small online database with separate access for coordinators, partner managers and Arogya World staff. This is not an official Arogya World tool.

Plain HTML, CSS and JavaScript. No build step. Hosted on GitHub Pages from the `main` branch root.

Built by Dr Nithin G N. [LinkedIn](https://www.linkedin.com/in/dr-nithin-g-n-868808218/)
