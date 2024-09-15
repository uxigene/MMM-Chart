/* global Chart Log Module */

/* MagicMirror²
 * Module: MMM-Chart
 *
 * By Evghenii Marinescu https://github.com/evghenix/
 * MIT Licensed.
 */

Module.register("MMM-Chart", {
    defaults: {
        width       : 200,
        height      : 200,
        chartConfig : {}
    },

    getScripts () {
        return [`modules/${this.name}/node_modules/chart.js/dist/chart.umd.js`];
    },

    start () {
        Log.info(`Starting module: ${this.name}`);
    },

    getDom () {
    // Create wrapper element
        const wrapperEl = document.createElement("div");
        wrapperEl.setAttribute("style", "position: relative; display: inline-block;");

        // Create chart canvas
        const chartEl = document.createElement("canvas");

        // Init chart.js
        this.chart = new Chart(chartEl.getContext("2d"), this.config.chartConfig);

        // Set the size
        chartEl.width  = this.config.width;
        chartEl.height = this.config.height;
        chartEl.setAttribute("style", "display: block;");

        // Append chart
        wrapperEl.appendChild(chartEl);

        return wrapperEl;
    }
});
