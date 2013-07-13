---
title: famous equations (only a test file with LaTex support)
layout: post
---

Here we go with little test on LaTex support on this site.

### Einstein's equation on mass and energy:

<p>
\[E=mc^{2}\]
</p>
***

### The Lorenz Equations

<p>
\begin{align}
\dot{x} & = \sigma(y-x) \\
\dot{y} & = \rho x - y - xz \\
\dot{z} & = -\beta z + xy
\end{align}
</p>

---

### The Cauchy-Schwarz Inequality

<p>\[
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]</p>

---

### The probability of getting \(k\) heads when flipping \(n\) coins is:

<p>\[P(E) = {n \choose k} p^k (1-p)^{ n-k} \]</p>

---

### An Identity of Ramanujan

<p>\[
   \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
     1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
      {1+\frac{e^{-8\pi}} {1+\ldots} } } }
\]</p>

---

### In-line Mathematics

<p>Finally, while display equations look good for a page of samples, the
ability to mix math and text in a paragraph is also important.  Thisexpression \(\sqrt{3x-1}+(1+x)^2\) is an example of an inline equation.  As
you see, MathJax equations can be used this way as well, without unduly
disturbing the spacing between lines.</p>
***
the test ends here.

Therefore the points that should be noted by using MathJex for LaTex support are all about the syntaxes. 

In MathJex the mode for pure math expression is using <code>\\[ and \\]</code>, similar to <code>$$ with $$</code> in LaTex syntax.

Another difference is the inline math expression by using <code>\\( and \\)</code> in stead of using <code>$ with $</code> in LaTex.