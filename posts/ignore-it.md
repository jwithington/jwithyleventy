---
title: Ignore It, then Deploy It
teaser: Building a gitignore file to prep for continuous deployment
tags: git, coding, continuous deployment
---

# Ignore It, then Deploy It

Today I realized I wanted to set this thing up for real continous deployment -- I no longer wanted to have to drag and drop to deploy the thing. I like using git even for personal projects, so it's a no-brainer to make it so that pushing to remote causes a deploy.

I set it up on [Netlify][netlify] kinda by default, simply because it was in the [eleventy tutorial's deployment section][eleventy-tut], and I gotta say: it's nice to be back! I used to play around with Netlify a lot in the past, but haven't had a need to for a long time (as I was using [surge.sh](https://surge.sh/), [Github Pages][pages], or [Blot][blot], depending on what I was working on).

And those are all good tools for what they are! But with [Eleventy][eleventy], I'm trying to do it The Eleventy Way™️, and so using the first thing they mentioned in the tutorial felt right. 😀

## A tiny gitignore explainer

I also knew that I never want to throw a git repo on GitHub without creating a `.gitignore` file. For the uninitiated, that's a file that tells git, "hey, don't ever include these files in the repo." Briefly speaking, this prevents you from checking in:

- files that don't need to be in your repo and that take up a bunch of space, like your `nodemodules` folder
- stuff that operating systems or apps use that have nothing to do with your project, like VS Code settings or all the junk that macOS dumps into folders
- **most importantly**: app secrets, environmental variables, and anything else that could result in something terrible like your API getting published for anyone to grab and use

That last one is a huge gotcha, and a bit of the reason why I use deployment services in the first place: people have built deploy tools that mean I'm not working too close to the metal. I like safeguards that prevent me from getting a giant web hosting bill, don't you?

## Let's build that file

As a front end dev I'm absolutely well-versed in _using_ a git ignore file, but I'm rarely the originator of it. At my last job, we inherited a lot of ignore files since our app began with us forking [Backstage][backstage].

So this time, it 's my turn!

The Eleventy docs weren't super helpful, and neither was the actual Eleventy `.gitignore` file, since it...had a lot of stuff that felt very specific to the project, not to what a user like me would need.

After some Googling, I ended up finding a couple of sources for my main tools: VS Code, on a Mac. I also found someone's basic boilerplate version and deleted ths stuff I figured I wouldn't use. I kept the sources in the file, both for me, and so I can credit them. You can see [the file in the now-published GitHub repo][gh repo]. Hooray for tools built by folks!

A non-zero amount of what's in that file represents things I haven't built yet, like environmental variables and such. To me, that makes it a good safeguard -- it's already there when I do need it, and it prevents my "go go go" hyperfocus brain from missing the important stuff later.

## Time to deploy

After I'm sure I have that all ready to go, it's time to deploy. I used the [GitHub CLI to push the local folder][gh-cli] to a GitHub repo. From there, I followed the defaults in Netlify, and I did run into one hiccup: because I'm using [eleventy 3.0][11ty3], the default `eleventy` build command failed.

I changed it to `npx @11ty/eleventy@canary`, which is the local build command,
and now it's all up and running! 🥳

[netlify]: https://www.netlify.com/
[eleventy]: https://www.11ty.dev/
[eleventy-tut]: https://www.11ty.dev/docs/deployment/
[pages]: https://pages.github.com/
[blot]: https://blot.im/
[backstage]: https://github.com/backstage/backstage
[gh repo]: https://github.com/jwithington/jwithyleventy/blob/main/.gitignore
[deploy]: https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git
[gh-cli]: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#importing-a-git-repository-with-the-command-line
[11ty3]: https://www.11ty.dev/blog/canary-eleventy-v3/
