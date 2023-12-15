export default class Vote {
  private heart: number;
  private rocket: number;
  private hooray: number;

  constructor(heart: number, rocket: number, hooray: number ) {
    this.heart = heart;
    this.rocket = rocket;
    this.hooray = hooray;
  }

  generateSvg(): string {    
    const heart = this.heart;
    const rocket = this.rocket;
    const sum = heart + rocket;
    
    const heartRatio = heart/sum;
    const rocketRatio = rocket/sum;

    console.log("Ratio: ",heartRatio, rocketRatio);

    const displayHeartRatio = (heartRatio*100).toFixed(2);
    const displayRocketRatio = (rocketRatio*100).toFixed(2);

    console.log("Display Ratio: heart:",displayHeartRatio,"rocket:", displayRocketRatio);

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

    const hooray = this.hooray;
    console.log("hooray:", hooray);


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
            <g transform="translate(0, 75)">
                <svg viewBox='0 0 300 32' width='300px' height='32px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <foreignObject x='0' y='0' width='300' height='32'>
                        <html xmlns='http://www.w3.org/1999/xhtml'>
                            <style>
                .img {
                    border-radius: 99999px;
                    background-image: url('data:image/webp;base64,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');
                    background-size: cover;
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 26px;
                    height: 26px;
                    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
                }

                .bar {
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    font-family: consolas, SimHei;
                    position: absolute;
                    top: 6.2px;
                    left: 16.0px;
                    height: 20.8px;
                    background: linear-gradient(rgb(241.62765957446808, 227.36382978723404, 184.57234042553193), rgb(235.11702127659572, 213.90851063829786, 150.28297872340426));
                    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
                    border-radius: 5px;
                    white-space: nowrap;
                    padding-left: 16.0px;
                    font-size: 12px;
                    color: rgb(255, 255, 255);
                    text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.5);
                }

                @keyframes move {
                    from {
                        width: 0px;
                    }

                    to {
                        width: 200px;
                    }
                }

                .bar {
                    animation-duration: 0.5s;
                    animation-name: move;
                    animation-fill-mode: both;
                }
                            </style>
                            <div class='bar'>
                                <span>${hooray}人のロリコン発見，FBI Open Up!
                                </span>
                            </div>
                            <div class='img'></div>
                        </html>
                    </foreignObject>
                </svg>
            </g>
        </svg>
    </g>
</svg>
   `;

    return svg;
  }
}
