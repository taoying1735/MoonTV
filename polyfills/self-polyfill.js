// Polyfill for 'self' in Node.js environment
// This provides a minimal implementation to prevent "self is not defined" errors during SSR

if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    // In Node.js environment, use global
    module.exports = global;
  } else if (typeof window !== 'undefined') {
    // In browser environment, use window
    module.exports = window;
  } else {
    // Fallback: create a minimal object
    module.exports = {};
  }
} else {
  // If self is already defined, use it
  module.exports = self;
}
