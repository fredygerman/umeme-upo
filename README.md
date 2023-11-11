# Umeme Upo

A Next Js app that shows you the current power status of various areas in Dar es Salaam, Tanzania.

There are 2 main repositories for this project:

- [Umeme Upo](https://github.com/fredygerman/umeme-upo) - The Next Js App
- [Umeme Upo Esp32-ping](https://github.com/fredygerman/umeme-upo-esp32-ping) - The ESP32 code that pings my server to notify that the power is on at the location it is.

## Features

- [✅] Theme Switcher
- [✅] Shows you the current power status of your area.
- [✅] Change Area to view power status.
- [✅] Shows the last time the power check was done
- [✅] Funny / Not so Funny Quotes
- [ 🔜] Share power status on social media
- [ 🔜] Share Quotes on social media.
- [ 🔜] On Demand Power Check Status Button
- [ 🔜] Realtime Power Status Update

Later On:

- [ ] Push Notifications
- [ ] SMS Notifications
- [ ] Email Notifications
- [ ] WhatsAPP Notifications / Bot

## Screenshots

![Umeme Upo Dark](https://github.com/fredygerman/umeme-upo/blob/main/screenshots/umeme-dark.png?raw=true)

![Umeme Upo Light](https://github.com/fredygerman/umeme-upo/blob/main/screenshots/umeme-light.png?raw=true)

(From the Figma File)

## Supported Areas

- [✅] Makumbusho
  Currently only supports Makumbusho area. More areas will be added soon.
  If you want to add your area, please open an issue. or contact me on [@fredygerman\_](https://twitter.com/fredygerman_)

## Design (UI/UX)

The Amazing design as seen on the screensshots has been done by [@faustin_henry](https://twitter.com/faustin_henry).

You can help improve it by visiting the [Figma File](https://www.figma.com/file/it33dzvxrxfhFDlnGX3h53/Umeme-Upo%3F?type=design&node-id=0%3A1&mode=design&t=6qOce4RvCVWTaUnq-1) and requesting access.

## How it works

Umeme Upo calls my directus Instance API to get the latest power status update from the database.

My directus instance is running on a self hosted server. It has a cron job (Directus Flow) that runs every 5 minutes to update the power status in the database.

The Directus Flow pings my Home Assistant instance Ip address to check if it is online. If it is online it updates the database. If it is offline, marks the power status as maybe offline and checks again in 10 minutes. (this is to avoid false positives which can happen when the internet is down, but power is still on, or when my server is down due to updates or maintenance)

## Tech Stack

- Next Js
- Typescript
- Tailwind CSS
- Directus (my headless CMS)
- ESP32 device to ping my Directus Server
- Vercel (Hosting)

IF you need help setting up everything with your own instance of Directus, Home Assistant or Vercel, please open an issue or contact me on [@fredygerman\_](https://twitter.com/fredygerman_)

## Contributing

If you want to contribute to this project, please open an issue.
Areas that need help:

Visit the [Contributing Guidelines](https://github.com/fredygerman/umeme-upo/blob/main/CONTRIBUTING.md) for more information.

## Code of Conduct

Visit the [Code of Conduct](https://github.com/fredygerman/umeme-upo/blob/main/CODE_OF_CONDUCT.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/fredygerman/umeme-upo/blob/main/LICENSE) file for details.
