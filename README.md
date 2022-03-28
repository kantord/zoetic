<div align="center">
	<h1>🌱 🎥 zoetic</h1>
	<p>Markdown presentations using your webcam</p>
</div>


## Usage


### Setup

In order to use Zoetic, you need to clone the Zoetic repository:

```bash
git clone git@github.com:kantord/zoetic.git
```

`cd` into the newly created folder

```bash
cd zoetic
```

Make sure to install dependencies before you try to run your slides:

```bash
yarn install
```

### Edit your slides

Place your slides inside `decks/`. See `decks/hello.mdx` for an example. You can use Markdown
in order to format your slides. In order to create multiple slides in one deck, you can use
`---` in order to separate the slides, for example:

```mdx
# First slide

---

Second slide
```

Want to use React components in your slides, or other more advanced features? Consult the
[mdx-deck documentation](https://github.com/jxnblk/mdx-deck).


### Test and present your slides

In order to run your slides, use `yarn zoetic`. For example, if your slides are in 
`decks/hello.mdx`, then run

```bash
yarn zoetic hello.mdx
```

If you want to use `zoetic` in order to present on an online meeting, you have to use screen
sharing. Open `zoetic` before joining your call and make sure your camera is turned on and
zoetic has access to it. Then join your call without enabling your camera in the call.

Once you join your call, share just the zoetic window in the call. If you want to participate
in the call without the slides before starting your presentation, you can simple include an
empty slide.



## Planned features

* "Green screen" support
	- Blur background
	- Use and image as background
	- Use different background settings in each slide
* Multi-camera support
	- Switch camera with hotkeys
	- Associate different cameras/camera angles with different slides
* Virtual webcam support
	- Use your presentation as a virtual camera in order to allow working with other software
* Draw on your screen using your fingers
* Share a window from your screen in order to do live demonstrations or live coding
