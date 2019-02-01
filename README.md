Code By Women
====
![](https://travis-ci.org/madelyneriksen/codebywomen.svg?branch=master) [![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-green.svg)] (https://shields.io/) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/)

A collection of awesome technology blogs and projects, created by women. Originally built as a personal list of blogs to check in with frequently, now CodeByWomen aims to serve as an open source index of women who write about and create software.

## Add A Blog

You will need a Github account to add your blog directly to CodeByWomen. Fork this repository, add your blog to the fork, and then open a pull request.

Blog and project entries are written in YAML syntax, a human-readable version of JSON. Here's a template for adding a project:

```yaml
author:
  name: Your Name
  github: URL to your Github (Optional)
  twitter: URL to your Twitter profile (Optional)
  instagram: URL to your Instagram profile (Optional)
  pinterest: URL to your Pinterest Profile (Optional)
  youtube: URL to your Youtube Profile (Optional)
date: 2019-02-01
title: Your Blog/Project Title (Or Your Name!)
url: http://your-blog-url-here.xyz
screenshot: ./img/your-blog-url-here-xyz.com
description: |
  Talk a little bit about your blog here! Or your project, if this is a project!
```

Save this file under `content/blogs/your-blog-here.yml` and commit your changes! You will need to take a screenshot of your site and place it in `content/blogs/img/your-blog-here-xyz.png` as well.

If you need help, or would like someone else to add your blog/project, contact [Madelyn Eriksen](https://github.com/madelyneriksen/) directly.

## Contributing Code

CodeByWomen is written in React/GatsbyJS and open source. You are more than welcome to open a pull request!

To get started hacking on the project, clone it into a new directory, and start the development server with the following command:

```bash
npx gatsby develop
```

Jest is used as the unit testing framework. To run the tests, use the following commands:

```bash
npm test
```

If you have updated components, try the following test command to update the snapshots:

```bash
npm test -- -u
```

## Special Thanks

I would like to thank the following projects and companies for making this project possible:

* **Every** blog and project featured on CodeByWomen.
* [Netlify](https://www.netlify.com/) for hosting CodeByWomen.
* [WomenWhoDesign](https://womenwho.design/) for inspiring me to share this list.
* [The Gatsby Team](https://www.gatsbyjs.org/) for creating an awesome Static Site Generator

### License

CodeByWomen is licensed under the terms of the MIT License. External content and visuals are owned wholly by their original creators, unless explicitly stated otherwise.
