<script>
  document.addEventListener("DOMContentLoaded", () => {
    const animateCount = (el, target) => {
      let count = 0;
      const step = Math.ceil(target / 100);
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        el.textContent = count.toLocaleString();
      }, 30);
    };

    animateCount(document.getElementById("callCount"), 1234);
    animateCount(document.getElementById("msgCount"), 5678);
  });
</script>