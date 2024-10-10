# Documentation

This documentation is based on [VuePress](https://vuepress.vuejs.org/), a vue-powered static site generator.
Here you get a brief overview on how to contribute to the growth and the maintainance of this documentation.
The underlying repository is located in [GitHub](https://github.com/DH-Center-Tuebingen/spacialist-docs).


## Structure

There are only a few places of relevance for the average contributor: pages, assets and the config.

- **Pages** can be found directly in the **/docs/*** directories
- The important **Config**-File can be found in **/docs/.vuepress/config.js**
- **Assets** like images and videos reside inside the **/docs/.vuepress/public/assets/** directory

## Contributing

All pages are written in plain Markdown. If you want to change a file, just locate it inside the **/docs/** directory and add the file accordingly. There are some additional Markdown functionalities available. For a more detailed description see the [VuePress Documentation](https://vuepress.vuejs.org/guide/markdown.html).

If you want to add a page, you also need to register that file inside the **sidebar** section of the config file. For it to show up in the navigation.

## Final Notes

That's basically it. Thank you for contributing.