import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import styles from './<%= componentName %>.module.scss';

/**
 * Component's properties
 */
export interface I<%= componentName %>Props {
    description: string;
}

/**
 * Class-component
 */
@Component
export default class <%= componentName %> extends Vue implements I<%= componentName %>Props {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop()
    public description: string;

    /**
     * Readonly property to return styles
     */
    public get styles(): { [key: string]: string } {
        return styles;
    }
}