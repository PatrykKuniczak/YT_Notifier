Sections:

```css
{
  /* Positioning, start of this section should looks like in this example below */
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
  width: 100px; /* On first width and height */
  height: 100px;

  /* Rest */
  overflow: hidden;  
  box-sizing: border-box;

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
  font-size: 16px;
  line-height: 1.4;

  /* Others */
  cursor: pointer;
  
  /* Media Queries USE WITH NEW SYNTAX 'width > value' */
  @media(width > 100px) {
  }
  
  /* Keyframes */
  @keyframes animationName {
  }
}
```

https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/
