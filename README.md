# Pinterest Widgets
<div align="center">
    <img src="/img/banner.png"/><br/>
    <a href="https://github.com/AllJavi/pinterest-widget-obsidian/stargazers">
        <img src="https://img.shields.io/github/stars/AllJavi/pinterest-widget-obsidian?color=a9b665&style=for-the-badge&logo=starship">
    </a>
    <a href="https://github.com/AllJavi/pinterest-widget-obsidian/issues">
        <img src="https://img.shields.io/github/issues/AllJavi/pinterest-widget-obsidian?color=ea6962&style=for-the-badge&logo=codecov">
    </a>
    <a href="https://github.com/AllJavi/pinterest-widget-obsidian/network/members">
        <img src="https://img.shields.io/github/forks/AllJavi/pinterest-widget-obsidian?color=7daea3&style=for-the-badge&logo=jfrog-bintray">
    </a>
    <a href="https://github.com/AllJavi/pinterest-widget-obsidian/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-orange.svg?color=d4be98&style=for-the-badge&logo=archlinux">
    </a>
</div>


## Description
This is a cool little plugin for Obsidian that allows you to display your Pinterest profile, pins and boards right within your notes. It's super convenient and makes it easy to keep all your inspiration and resources organized in one place

## Widgets
### Pin
#### Parameters
- `url`: Url to the Pin (example: `https://www.pinterest.com/pin/99360735500167749/`)
- `pinSize`: Preset Pin size (example: `small, medium, large`)
- `width`: Specific width[^1] for the Pin (example: `50%, 200px, 30vw`)
[^1]: It's width reduction so make sure to choose a `pinSize` bigger than the size you want 

#### Example
~~~
```pinterest
type: pin
pinSize: large
width: 80%
url: https://www.pinterest.com/pin/99360735500167749/
```
~~~

#### Preview
https://user-images.githubusercontent.com/49349604/215115153-3f9acb72-c2dd-43bc-9643-68afb7966617.mp4

### Board
#### Parameters
- `url`: Url to the Board (example: `https://www.pinterest.com/pinterest/official-news/`)
- `width`: Specific width for the Board (example: `50%, 200px, 30vw`)
- `height`: Specific height for the Board (example: `500px, 700px`)
- `hide-button`: Hide the Follow Button (example: `true, false`)

#### Example
~~~
```pinterest
type: board
width: 90%
height: 500px
hide-button: true
url: https://www.pinterest.com/pinterest/official-news/
```
~~~

#### Preview
https://user-images.githubusercontent.com/49349604/215119002-7292780f-3621-4ccb-8a99-948565dabec2.mp4

### Profile
#### Parameters
- `url`: Url to the Profile (example: `https://www.pinterest.com/pinterest/`)
- `width`: Specific width for the Board (example: `50%, 200px, 30vw`)
- `height`: Specific height for the Board (example: `500px, 700px`)
- `hide-button`: Hide the Follow Button (example: `true, false`)

#### Example
~~~
```pinterest
type: profile
width: 100%
height: 300px
url: https://www.pinterest.com/pinterest/
```
~~~

#### Preview
https://user-images.githubusercontent.com/49349604/215119824-311d0b11-dc74-4271-8df5-2b11fa5ee13d.mp4


## How to Install
### From within Obsidian

From Obsidian v0.15.0+, you can activate this plugin within Obsidian by doing the following:

- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for "Pinterest Widgets"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin

## ⚠️ Warning
This plugin runs Pinterest code, so if for some reason Pinterest gets hacked, the hackers could pretty much do whatever they want.
