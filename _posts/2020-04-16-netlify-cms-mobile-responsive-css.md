---
title: Netlify CMS mobile responsive CSS
description: Netlify CMS mobile responsive CSS
date: 2020-04-16T21:10:10.968Z
featured_image: /images/posts/netlify-cms.jpg
---
So far I've been waiting so long for the Netlify CMS to be working on mobile devices so I wrote my own piece of CSS as below. Add it to your Netlify `/admin/index.html` file.

```css
@media (max-width: 799px) {
  .css-u4olba-SidebarContainer-card {
    display: none;
  }
  .css-v758ki-AppMainContainer,
  .css-12b66la-AppHeaderContent {
    min-width: 0;
  }
  .css-104dqk8-AppHeaderButton-button-buttonActive-buttonActive-buttonActive-buttonActive-AppHeaderButton,
  .css-12yqrwa-AppHeaderNavLink-AppHeaderButton-button-buttonActive-buttonActive-buttonActive-buttonActive-AppHeaderButton {
    margin: 0;
    padding: 16px 7px;
  }
  .css-1f7nhiq-CollectionMain {
    padding-left: 0;
  }
  .css-1hvrgvd-CollectionTopContainer-card-cardTop {
    width: 100%;
  }
  /* Media */
  .css-1f3mf5k-StyledModal {
    padding: 15px;
  }
  .css-svjxk-SearchContainer {
    display: block;
    width: 100%;
  }
  .css-smzvtl-LibraryTop {
    flex-direction: column;
  }
  .css-3ifd9s-ActionsContainer {
    text-align: center;
  }
  .css-1ih1y1j-LibraryTitle {
    margin-bottom: 15px;
  }
  .css-13rmovq-StyledUploadButton-button-default-disabled-button-gray {
    margin-top: 5px;
  }
  .css-1hpjyse-DeleteButton-button-default-disabled-button-lightRed {
    padding: 0 5px;
    font-size: 12px;
    line-height: 1.1;
  }
  .css-16796rj-LowerActionsContainer {
    display: inline-block;
    margin-top: 10px;
  }
  .css-stmjdx-CardGridContainer {
    position: static;
    overflow: visible;
    width: 100%;
    margin-top: 25px;
  }
  /* End Media */
  /* Blog */
  .css-hn3jn7-EditorContainer {
    min-width: 0;
    padding-top: 100px;
  }
  .css-2oej7z-ToolbarContainer {
    height: 100px;
    width: 100%;
    min-width: 0;
  }
  .css-osnbqe-ToolbarToggle {
    flex-direction: column;
  }
  /* End Blog */
}
```