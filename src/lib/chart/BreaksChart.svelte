<script>
  export let hovered = null;
  export let height = 15;
  export let breaks = [0, 20, 40, 60, 80, 100];
  export let colors = [
    "rgba(234,236,177,.8)",
    "rgba(169,216,145,.8)",
    "rgba(0,167,186,.8)",
    "rgba(0,78,166,.8)",
    "rgba(0,13,84,.8)",
  ];
  export let formatTick = (d) => d.toFixed(1);
  export let formatVal = (d) => d.toFixed(1);
  export let suffix = "%";

  const pos = (val, breaks) => {
    let i = 0;
    while (val > breaks[i + 1]) i += 1;
    let unit = 100 / (breaks.length - 1);
    let offset = (val - breaks[i]) / (breaks[i + 1] - breaks[i]);
    return (i + offset) * unit;
  };
</script>

<div class="container" style="height: {height}px">
  {#each breaks.slice(1) as brk, i}
    <div
      class="block"
      style="width: {100 / (breaks.length - 1)}%; left: {i *
        (100 / (breaks.length - 1))}%; background-color: {colors[i]};"
    />
    <div class="line" style="left: {i * (100 / (breaks.length - 1))}%;" />
    <div
      class="tick"
      class:tick-start={i == 0}
      style="left: {i * (100 / (breaks.length - 1))}%;"
    >
      {formatTick(breaks[i])}
    </div>
  {/each}
  <div class="line" style="left: 100%;" />
  <div class="tick tick-end" style="left: 100%;">
    {formatTick(breaks[breaks.length - 1])}{suffix}
  </div>
  {#if typeof hovered === "number"}
    <div class="marker" style:left="{pos(hovered, breaks)}%" />
    <div class="value" style="left: {pos(hovered, breaks)}%">
      {formatVal(hovered)}{suffix}
    </div>
  {/if}
</div>

<style>
  .container {
    margin: 30px 0 24px 0;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    line-height: 1;
    font-size: 14px;
  }
  .block {
    position: absolute;
    top: 0;
    height: 100%;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  .line {
    position: absolute;
    top: 0;
    height: calc(100% + 10px);
    border-left: solid 1px black;
  }
  .tick,
  .value {
    line-height: normal;
  }
  .tick {
    position: absolute;
    z-index: 1;
    top: calc(100% + 8px);
    text-align: center;
    transform: translateX(-50%);
  }
  .tick-start {
    transform: translateX(-2px);
  }
  .tick-end {
    transform: translateX(calc(2px - 100%));
  }
  .marker {
    position: absolute;
    z-index: 2;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 16px solid #222;
    transform: translateX(-50%);
  }
  .value {
    position: absolute;
    top: -30px;
    text-align: center;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
