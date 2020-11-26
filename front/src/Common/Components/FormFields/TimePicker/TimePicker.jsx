import React from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import {InputGroup, InputGroupAddon} from 'reactstrap'

import {
    faClock,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Field } from 'redux-form';
import FormField from '../FormField';


import '../FormFields.scss';
import './timepicker.scss';

export default ({
	className,
	...props
}) => (
	<div className="form-timepicker">
	<InputGroup>
		<InputGroupAddon addonType="prepend">
			<div className="input-group-text">
				<FontAwesomeIcon icon={faClock}/>
			</div>
		</InputGroupAddon>
		<Field
			component={FormField}
			as={DatePicker}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={15}
			timeCaption="Time"
			dateFormat="hh:mm aa"
			{...props}
			className={classNames({
				'form-field__timepicker': true,
				[className]: className,
			})}
		/>
	</InputGroup>
	</div>
);