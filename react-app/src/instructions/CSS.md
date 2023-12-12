Sections:

```css
{
  /* Mixins */
  ...myMixin;
    
  /* Positioning, start of this section should looks like in this example below */
  content: '';
  position: absolute;
  z-index: 10;
 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* Displaying */
  display: inline-block;
  align-items: center;
  gap: 1rem; /* In the end */
  
  /* Box Model */  
  box-sizing: border-box;
  width: 100px; /* On first width and height */
  height: 100px;

  /* Margins and etc. */
  margin: 10px;
  padding: 10px;
  border: 10px solid #333;
  
  /* Colors */
  background: #000;
  color: #fff;
  
  /* Text */
  text-align: right;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  font-style: normal;
  line-height: 1.4;

  /* Others */  
  overflow: hidden;
  cursor: pointer;

  /* Pseudo classes */
  :hover {
      
  }

  /* Pseudo elements */
  ::after {
      
  }

  /* Webkit */
  ::-webkit-*{
  }

  /* Media Queries USE NEW SYNTAX 'width > value' */
  @media(width > 100px) {
  }
  
  /* Keyframes */
  @keyframes animationName {
  }
}
```

https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/
