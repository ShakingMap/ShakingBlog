import React from 'react';
import Container from './container';
import {PageHeader, FormGroup, FormControl, ControlLabel, InputGroup, Button, Tabs, Tab} from 'react-bootstrap';
import UpdateInputGroup from '../../core/components/update-input-group';
import ClientUtils from '../../../lib/client-utils';
import _ from 'lodash';
import {Random} from 'meteor/random';
import autosize from 'autosize';

class Page extends React.Component {
    componentDidMount() {
        this.initAutosize();
    }

    componentDidUpdate() {
        this.initAutosize();
    }

    render() {
        const {links, sections} = this.props;

        return <Container>
            <PageHeader>系统管理</PageHeader>
            {
                _.map(links, (link, index)=>
                    <Button key={index} bsStyle="primary" href={link.href} style={{marginRight: '10px'}}>
                        {link.text}
                    </Button>
                )
            }
            <hr/>
            {
                sections && sections.length ?
                    <Tabs defaultActiveKey={0} id={Random.id()} animation={false}
                          onSelect={this.triggerAutosize.bind(this)}>
                        {
                            _.map(sections, (section, index) =>
                                <Tab key={index} eventKey={index} title={section.name} style={{marginTop: '20px'}}>
                                    {
                                        _.map(section.items, (item, index)=>
                                            <FormGroup key={index}>
                                                <ControlLabel>{item.name}</ControlLabel>
                                                <UpdateInputGroup {...{
                                                    componentClass: FormControl,
                                                    componentProps: item.type === 'string' ? undefined : {
                                                        componentClass: 'textarea',
                                                        style: {resize: 'vertical'}
                                                    },
                                                    value: item.value || (item.type === 'array' ? '[]' : item.type === 'object' ? '{}' : ''),
                                                    onUpdate: ({value})=>item.onUpdate(value),
                                                    compare: item.type === 'string' ? undefined : ClientUtils.compareJSON
                                                }}/>
                                            </FormGroup>
                                        )
                                    }
                                </Tab>
                            )
                        }
                    </Tabs> : null
            }
        </Container>
    }

    initAutosize() {
        autosize(document.querySelectorAll('textarea'));
        setTimeout(()=>autosize.update(document.querySelectorAll('textarea')), 0);
    }

    triggerAutosize() {
        setTimeout(()=>autosize.update(document.querySelectorAll('textarea')), 0)
    }
}

Page.propTypes = {
    // [{text, href}]
    links: React.PropTypes.array,

    // [{name, items}]
    // items: [{name, type, value, onUpdate}], type is 'string', 'array', or 'object', onUpdate is func(newValue)
    sections: React.PropTypes.array
};

export default Page;