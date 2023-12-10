export default class Vote {
  private heart: number;
  private rocket: number;

  constructor(heart: number, rocket: number ) {
    this.heart = heart;
    this.rocket = rocket;
  }

  generateSvg(): string {    
    const heart = this.heart;
    const rocket = this.rocket;
    const sum = heart + rocket;
    
    const heartRatio = heart/sum;
    const rocketRatio = rocket/sum;

    const displayHeartRatio = Number(heartRatio.toFixed(2))*100;
    const displayRocketRatio = Number(rocketRatio.toFixed(2))*100;

    const barLen = 250;
    const heartLen = barLen * heartRatio;
    
    const rocketX = heartLen;
    const rocketLen = barLen * rocketRatio;

    const heartName = "纯爱战士";
    const rocketName = "牛头人";
    const heartNameEN = "Pure Love Knight";
    const rocketNameEN = "NTR Warrior";

    const heartColor = "#FF3399";
    const rocketColor = "#0099FF";

    const svg = `
    <svg width="300" height="190" viewBox="0 0 300 190" fill="none"
    xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="descId">
    <title id="titleId"></title>
    <desc id="descId"></desc>
    <style>
    .header {
      font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
      fill: #2f80ed;
      animation: fadeInAnimation 0.8s ease-in-out forwards;
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .header { font-size: 15.5px; }
    }
    @keyframes slideInAnimation {
      from {
        width: 0;
      }
      to {
        width: calc(100%-100px);
      }
    }
    @keyframes growWidthAnimation {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #434d58;
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .bold { font-weight: 700 }
    .lang-name {
      font: 400 11px "Segoe UI", Ubuntu, Sans-Serif;
      fill: #434d58;
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    #rect-mask rect{
      animation: slideInAnimation 1s ease-in-out forwards;
    }
    .lang-progress{
      animation: growWidthAnimation 0.6s ease-in-out forwards;
    }
             
      /* Animations */
      @keyframes scaleInAnimation {
        from {
          transform: translate(-5px, 5px) scale(0);
        }
        to {
          transform: translate(-5px, 5px) scale(1);
        }
      }
      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    
          
    </style>

    <g data-testid="main-card-body" transform="translate(0, 55)">
        <svg data-testid="lang-items" x="25">
            <mask id="rect-mask">
                <rect x="0" y="0" width="${barLen}" height="8" fill="white" rx="5"/>
            </mask>

            <rect mask="url(#rect-mask)" data-testid="lang-progress" x="0" y="0" width="${heartLen}" height="8" fill="${heartColor}" />

            <rect mask="url(#rect-mask)" data-testid="lang-progress" x="${rocketX}" y="0" width="${rocketLen}" height="8" fill="${rocketColor}" />
            
            <g transform="translate(0, 25)">
                <g transform="translate(0, 0)">
                    <g transform="translate(0, 0)">
                        <g class="stagger" style="animation-delay: 450ms">
                            <circle cx="5" cy="6" r="5" fill="${heartColor}" />
                            <text data-testid="lang-name" x="15" y="10" class='lang-name'>
                            ${heartName} ${displayHeartRatio}%
                            </text>
                        </g>
                    </g>
                </g>
                <g transform="translate(0, 25)">
                    <g transform="translate(0, 0)">
                        <g class="stagger" style="animation-delay: 450ms">
                            <circle cx="5" cy="6" r="5" fill="${heartColor}" />
                            <text data-testid="lang-name" x="15" y="10" class='lang-name'>
                            ${heartNameEN} ${displayHeartRatio}%
                            </text>
                        </g>
                    </g>
                </g>

                <g transform="translate(150, 0)">
                    <g transform="translate(0, 0)">
                        <g class="stagger" style="animation-delay: 450ms">
                            <circle cx="5" cy="6" r="5" fill="${rocketColor}" />
                            <text data-testid="lang-name" x="15" y="10" class='lang-name'>
                            ${rocketName} ${displayRocketRatio}%
                            </text>
                        </g>
                    </g>
                </g>
                <g transform="translate(150, 25)">
                    <g transform="translate(0, 0)">
                        <g class="stagger" style="animation-delay: 450ms">
                            <circle cx="5" cy="6" r="5" fill="${rocketColor}" />
                            <text data-testid="lang-name" x="15" y="10" class='lang-name'>
                            ${rocketNameEN} ${displayRocketRatio}%
                            </text>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    </g>
</svg>
   `;

    return svg;
  }
}
