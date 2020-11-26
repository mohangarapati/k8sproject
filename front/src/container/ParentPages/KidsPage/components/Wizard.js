import React from 'react'
import {

    Button

} from 'reactstrap';



const checkNavState = (currentStep, stepsLength) => {
    if (currentStep > 0 && currentStep < stepsLength - 1) {
        return {
            showPreviousBtn: true,
            showNextBtn: true
        }
    } else if (currentStep === 0) {
        return {
            showPreviousBtn: false,
            showNextBtn: true
        }
    } else {
        return {
            showPreviousBtn: true,
            showNextBtn: false
        }
    }
}

export default class MultiStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            compState: 0,
            navState: this.getNavStates(0, this.props.steps.length)
        }

    }
    

    setNavState = next => {
        this.setState({
            navState: this.getNavStates(next, this.props.steps.length)
        })
        if (next < this.props.steps.length) {
            this.setState({compState: next})
        }
        this.setState(checkNavState(next, this.props.steps.length))
    }

    handleKeyDown = evt => {
        if (evt.which === 13) {
            this.next()
        }
    }

    handleOnClick = evt => {
        // if (
        //     evt.currentTarget.value === this.props.steps.length - 1 &&
        //     this.state.compState === this.props.steps.length - 1
        // ) {
        //     this.setNavState(this.props.steps.length)
        // } else {
        //     this.setNavState(evt.currentTarget.value)
        // }
    }

    next = () => {
        if(this.state.compState === 0) {
            if(!!this.props.profile )
                this.setNavState(this.state.compState + 1)
        }
        else if(this.state.compState === 1) {
            if(!!this.props.profile || (!! this.props.contact && this.props.contact.length > 0))
                this.setNavState(this.state.compState + 1)
        }else
            this.setNavState(this.state.compState + 1)
    }

    previous = () => {
        if (this.state.compState > 0) {
            this.setNavState(this.state.compState - 1)
        }
    }

    getClassName = (className, i) => {
        return className + '-' + this.state.navState.styles[i]
    }

    renderSteps = () => {
        return this.props.steps.map((s, i) => (
            <li
                className={this.getClassName('form-wizard-step', i)}
                onClick={this.handleOnClick}
                key={i}
                value={i}
            >
                <em>{i + 1}</em>
                <span>{this.props.steps[i].name}</span>
            </li>
        ))
    }

    getNavStates = (indx, length) => {
        let styles = []
        for (let i = 0; i < length; i++) {
            switch(i) {
                case 0:
                    if(!!this.props.profile) {
                        styles.push('done')
                    }
                    else {
                        if(indx === i)
                            styles.push('doing');
                        else styles.push('todo')
                    }
                    break;
                case 1:
                    if(!!this.props.contact && this.props.contact.length > 0)
                        styles.push('done')
                    else {
                        if(indx === i)
                            styles.push('doing');
                        else styles.push('todo')
                    }
                    break;
                case 2:
                    if(!!this.props.profile && !!this.props.contact && this.props.contact.length > 0)
                        styles.push('done');
                    else {
                        if(indx === i)
                            styles.push('doing');
                        else styles.push('todo')
                    }
                    break;
            }
        }
        return {current: indx, styles: styles}
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyDown}>
                <ol className='forms-wizard'>
                    {this.renderSteps()}
                </ol>
                {this.props.steps[this.state.compState].component}
                <div className="divider"/>
                <div className="clearfix">
                    <div style={this.props.showNavigation ? {} : {display: 'none'}}>
                        <Button color="secondary" className="btn-shadow float-left btn-wide btn-pill" outline
                            style={this.state.showPreviousBtn ? {} : {display: 'none'}}
                            onClick={this.previous}
                        >
                            Previous
                        </Button>

                        <Button  className="btn-shadow btn-wide float-right btn-pill btn-hover-shine"
                            style={this.state.showNextBtn ? {} : {display: 'none'}}
                            onClick={this.next}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

MultiStep.defaultProps = {
    showNavigation: true
}