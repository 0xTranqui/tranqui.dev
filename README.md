## How to Create Your Own Version of this Site:

1. Create and/or navigate to desired parent directory on your computer where you'd like to store this project and run the following in your terminal:
```
gh repo clone 0xTranqui/tranqui.dev
```

2. Navigate to the newly created project folder and install the packages by running the following in your terminal:
```
cd tranqui.dev
npm install
```

3. Open a localhost version of the site by running the following in your termainl:
```
cd tranqui.dev
npm run dev
```

4. In your text editor, update site header by opening components/layout.js and adjusting line 32 and line 40

5. For basic content updates, open pages/index.js and adjust section titles, content, and hyperlinks

6. Follow this [guide](https://nextjs.org/learn/basics/deploying-nextjs-app) (you can skip step 1 + 2 if you have already cloned this repo) for deploying your new site on Vercel

7. The rest is up to you

* Bonus: Use this simple but great [guide](https://thoughtsonpaper.dev/blog/how-to-add-namecheap-domain-to-vercel) to buy a custom domain on namecheap and transfer it over to your Vercel deployment


