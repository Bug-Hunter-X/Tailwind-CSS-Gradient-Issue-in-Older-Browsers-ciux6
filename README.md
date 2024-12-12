# Tailwind CSS Gradient Bug in Older Browsers

This repository demonstrates a rare bug encountered when using Tailwind CSS gradients in older browsers that lack support for the `conic-gradient` CSS function. The bug manifests as an unexpected display of the gradient, often showing a fallback color instead of the intended gradient.

## Bug Description

Tailwind CSS's gradient utilities rely on the `conic-gradient` function, a relatively modern addition to the CSS spec. Older browsers that don't fully support this function can render the gradient incorrectly, potentially showing only a solid color instead.

## Solution

The solution involves providing a fallback for browsers that don't support `conic-gradient`.  This can be done using a combination of CSS and JavaScript feature detection to apply a different gradient or styling only when necessary.