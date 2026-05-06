---
title: "UI Squint"
theme: "Getting Started"
tags: [ui, fonts, scaling, settings]
order: 110
---

When I fired up the game on my modern PC after a few years away, I thought my eyesight had finally failed me. The menus were the size of postage stamps, and reading the profit reports required a magnifying glass. I spent an hour squinting at the screen, frustrated that a game I loved felt 'broken' on new hardware.

I used to think this was just the 'tax' for playing a game from the 90's. I nearly gave up, thinking I was too old to fight with tiny pixels.

My revelation came when I dug into the 'Interface' settings (now meticulously indexed in **[[Mastery Notes#Interface & Setup | Master Hellish: UI & Font Settings]]**). I realized the game had a built-in 'Interface Scale' slider. This in Game Options > Graphics > Interface size (slider). I bumped it up a smudge higher than 1x, so about 1.3 and it made a huge difference. There are other settings there - Master Hellish explains them really well.

But the real joy came when I realized I could stop squinting at the pixelated 'traditional sprite fonts' and substitute my own system fonts. By opening the `openttd.cfg` file (found in `~/.config/openttd/` on Linux), I took total control of the fonts.

More than the screen size I realized that the font choice and font sizes could be changed so even on the map view I could read the town names much easier. The menus were better also. To change them I needed to change settings in the openttd.cfg file. The settings I use involve a standard sans serif font that comes with Debian 13 on Linux called Cantarell. Here are the pertinent settings: 

```ini
[misc]
small_font = Cantarell
medium_font = Cantarell
large_font = Cantarell
mono_font = Cantarell
small_size = 11
medium_size = 13
large_size = 15
mono_size = 11
```

Another setting I changed was from the default graphis set OpenGFX to the newer OpenGFX+2 Classic. This you can download from the Online Content choices.

It helps to also use a different GUI from the standard OpenGFX, namely U&GUI. I find it easier to see and read/distinguish the Icon meanings. Each to their own... also downloadable from Online Content

Hope this helps! Master Hellish does a good job of showing these suggested changes in his video.

> [!TIP] The Clarity Reflection: In 2026, the biggest 'Hurdle' is not always the train logic - it is the comfort of the player. If you cannot read the data, you cannot make the decisions. Do not fight the tiny text; use the scaling tools and give your eyes a break. Problem solved...