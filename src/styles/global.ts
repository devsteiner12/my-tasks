import styled, { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }


    :root {
      --color-brand-1: #3b5bdb;
      --color-brand-2: #364fc7;

      --color-gray-1: #212529;
      --color-gray-2: #868e96;
      --color-gray-3: #f1f3f5;
      --color-gray-4: #e9ecef;

      --sz-title-1: 24px;
      
      --font-weg-500: 500;

      --shadow: 0px 4px 40px rgba(125, 125, 125, 0.25);

      --radius-1: 8px;
    }

    body {
      font-family: "Inter", sans-serif;
      background-color: var(--color-gray-4);
      color: var(--color-gray-1);
    }
`;

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 880px;
  margin: 0 auto;
`;
