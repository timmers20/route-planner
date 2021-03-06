import React, {Component} from 'react';

const COLORS = [
    '#4A148C',
    '#F57F17',
    '#880E4F',
    '#827717',
    '#B71C1C',
    '#33691E',
    '#1A237E',
    '#E65100',
    '#3E2723',
    '#01579B',
    '#212121',
    '#006064'
];

class RouteVisual extends Component {

    renderRoute(total, segments) {
        let width = 350,
            height = 40;
        let mappedSegments = segments.map((seg) => (width * seg) / total);
        let legX = 0;
        let markX = ( (width / 2) - width);
        return (
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
            >
                <defs>
                    <symbol id="icon-location" viewBox="0 0 32 32">
                        <path
                            d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z"/>
                    </symbol>
                    <symbol id="icon-flag-checkered-start" viewBox="0 0 29 28">
                        <path
                            d="M13 15.625v-3c-1.906 0.172-4.203 0.938-6 1.828v2.891c1.813-0.844 4.062-1.563 6-1.719zM13 9.094v-3.078c-1.969 0.094-4.281 1.016-6 1.969v2.953c1.844-0.953 4.062-1.766 6-1.844zM26 16.328v-2.875c-1.422 0.703-3.906 1.75-6 1.109v-3.5c-0.203-0.063-0.406-0.141-0.609-0.234-1.797-0.906-3.266-1.75-5.625-1.75-0.25 0-0.5 0.016-0.766 0.047v3.469h0.297c2.359 0 4.297 0.844 6.094 1.734 0.203 0.094 0.406 0.172 0.609 0.234v2.938c0.422 0.172 0.891 0.266 1.422 0.266 1.734 0 3.609-0.922 4.578-1.437zM26 9.656v-2.953c-1.25 0.672-3 1.422-4.781 1.422v0c-0.422 0-0.828-0.031-1.219-0.125v3.063c2.094 0.594 4.578-0.609 6-1.406zM5 4c0 0.734-0.406 1.375-1 1.719v19.781c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-19.781c-0.594-0.344-1-0.984-1-1.719 0-1.109 0.891-2 2-2s2 0.891 2 2zM28 5v11.922c0 0.375-0.219 0.719-0.547 0.891-0.063 0.031-0.156 0.078-0.266 0.141-1 0.531-3.359 1.813-5.766 1.813-0.922 0-1.75-0.187-2.469-0.547l-0.438-0.219c-1.578-0.797-2.828-1.422-4.75-1.422-2.25 0-5.422 1.172-7.25 2.281-0.156 0.094-0.344 0.141-0.516 0.141s-0.344-0.047-0.5-0.125c-0.313-0.187-0.5-0.516-0.5-0.875v-11.594c0-0.344 0.187-0.672 0.484-0.859 1-0.594 4.531-2.547 7.812-2.547 2.609 0 4.734 0.953 6.531 1.828 0.406 0.203 0.875 0.297 1.391 0.297 1.844 0 3.875-1.172 4.844-1.75 0.203-0.109 0.375-0.203 0.484-0.266 0.313-0.156 0.672-0.141 0.969 0.031 0.297 0.187 0.484 0.516 0.484 0.859z"/>
                    </symbol>
                    <symbol id="icon-flag-checkered-end" viewBox="0 0 29 28">
                        <g transform="scale(-1,1)">
                            <path
                                d="M13 15.625v-3c-1.906 0.172-4.203 0.938-6 1.828v2.891c1.813-0.844 4.062-1.563 6-1.719zM13 9.094v-3.078c-1.969 0.094-4.281 1.016-6 1.969v2.953c1.844-0.953 4.062-1.766 6-1.844zM26 16.328v-2.875c-1.422 0.703-3.906 1.75-6 1.109v-3.5c-0.203-0.063-0.406-0.141-0.609-0.234-1.797-0.906-3.266-1.75-5.625-1.75-0.25 0-0.5 0.016-0.766 0.047v3.469h0.297c2.359 0 4.297 0.844 6.094 1.734 0.203 0.094 0.406 0.172 0.609 0.234v2.938c0.422 0.172 0.891 0.266 1.422 0.266 1.734 0 3.609-0.922 4.578-1.437zM26 9.656v-2.953c-1.25 0.672-3 1.422-4.781 1.422v0c-0.422 0-0.828-0.031-1.219-0.125v3.063c2.094 0.594 4.578-0.609 6-1.406zM5 4c0 0.734-0.406 1.375-1 1.719v19.781c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-19.781c-0.594-0.344-1-0.984-1-1.719 0-1.109 0.891-2 2-2s2 0.891 2 2zM28 5v11.922c0 0.375-0.219 0.719-0.547 0.891-0.063 0.031-0.156 0.078-0.266 0.141-1 0.531-3.359 1.813-5.766 1.813-0.922 0-1.75-0.187-2.469-0.547l-0.438-0.219c-1.578-0.797-2.828-1.422-4.75-1.422-2.25 0-5.422 1.172-7.25 2.281-0.156 0.094-0.344 0.141-0.516 0.141s-0.344-0.047-0.5-0.125c-0.313-0.187-0.5-0.516-0.5-0.875v-11.594c0-0.344 0.187-0.672 0.484-0.859 1-0.594 4.531-2.547 7.812-2.547 2.609 0 4.734 0.953 6.531 1.828 0.406 0.203 0.875 0.297 1.391 0.297 1.844 0 3.875-1.172 4.844-1.75 0.203-0.109 0.375-0.203 0.484-0.266 0.313-0.156 0.672-0.141 0.969 0.031 0.297 0.187 0.484 0.516 0.484 0.859z"/>
                        </g>
                    </symbol>
                </defs>
                <use
                    xlinkHref="#icon-flag-checkered-start"
                    x={markX + 10}
                    y="0"
                    height={height / 2}
                    fill={COLORS[0]}
                >

                </use>

                {
                    mappedSegments.map((leg, idx) => {
                        let markerElm = idx === 0 ? null : <use
                            key={'mark' + idx}
                            xlinkHref="#icon-location"
                            x={markX}
                            y={0}
                            height={height / 2}
                            fill={COLORS[idx]}
                        />;

                        markX = markX + leg;

                        return markerElm;
                    })
                }

                <use
                    xlinkHref="#icon-flag-checkered-end"
                    x={width / 2 + 10}
                    y="0"
                    height={height / 2}
                    fill={COLORS[mappedSegments.length - 1]}
                >
                </use>

                {
                    mappedSegments.map((leg, idx) => {
                        let legElm = <rect
                            key={'leg' + idx}
                            x={legX}
                            y={height / 2}
                            width={legX + leg}
                            height={5}
                            fill={COLORS[idx]}
                        />;
                        legX = legX + leg;
                        return legElm;
                    })
                }
            </svg>
        )
    }

    render() {
        let {data} = this.props;
        let {totalDistance, distances} = data;

        // totalDistance = 5000;
        // distances = [2500, 2500];

        return !totalDistance ? null : (
            <div className="route-visual">
                {this.renderRoute(totalDistance, distances)}
            </div>
        )
    }
}

export default RouteVisual;