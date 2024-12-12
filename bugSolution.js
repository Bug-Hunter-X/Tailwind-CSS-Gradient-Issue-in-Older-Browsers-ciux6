```javascript
// ... other Tailwind CSS classes ...
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg" style="background-image: linear-gradient(to right, rgb(59, 130, 246), rgb(156, 49, 235))">
  <!-- Content here -->
</div>

//or

//Javascript fallback detection
function supportsConicGradient() {
  return 'conic-gradient' in CanvasRenderingContext2D.prototype;
}

if (!supportsConicGradient()) {
  //Apply fallback CSS here
document.querySelector('div').style.backgroundImage="linear-gradient(to right, rgb(59, 130, 246), rgb(156, 49, 235))";
}
```