'use strict';

export default class DashboardWidget {
    constructor() {
        this.component = Vue.component(
            this.constructor.name,
            this.build_widget()
        );
        this.settings = Vue.component(
            this.constructor.name + '_settings',
            this.build_settings()
        );
    }

    label = 'Empty Widget';

    build_widget() {
        return {
            data: function () {
                return {};
            },
            template: `
            <v-card :elevation="outlined ? 0 : 2" :outlined="outlined">
                Empty Dashboard Widget
            </v-card>
            `
        };
    }

    build_settings() {
        return {
            data: function () {
                return {};
            },
            template: '<div></div>'
        };
    }
}