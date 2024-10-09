import { addons } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';
import { themes, create } from '@storybook/theming';

const logo = require("../public/Logo.svg");
const favicon = require("../public/volta-icon.png");

 
addons.setConfig({
  theme: create({
    brandTitle: "Volta App",
    brandUrl: "https://volta.health",
    brandTarget: "_blank",
    base: "light",
    brandImage: logo,
  })
});

const link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = '../public/volta-icon.png';
document.head.appendChild(link);

addons.register('override-title', (api) => {
  api.on(STORY_RENDERED, (storyId) => {
    const story = api.getStoryById(storyId);
    if (story) {
      const storyTitle = story.name || story.kind;
      document.title = `${storyTitle} - Volta App`;
    }
  });
});