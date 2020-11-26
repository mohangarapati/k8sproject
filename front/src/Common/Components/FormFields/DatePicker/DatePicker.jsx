import React from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import {InputGroup, InputGroupAddon} from 'reactstrap'

import {
    faCalendarAlt,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Field } from 'redux-form';
import FormField from '../FormField';


import '../FormFields.scss';
import './datepicker.scss';

export default ({
	className,
	icon,
	...props
}) => (
	<div className="form-datepicker">
	<InputGroup>
		{icon &&
		<InputGroupAddon addonType="prepend">
			<div className="input-group-text">
				<FontAwesomeIcon icon={faCalendarAlt}/>
			</div>
		</InputGroupAddon>
		}
		<Field
			component={FormField}
			as={DatePicker}
			{...props}
			dateFormat="dd/MM/yyyy"
			className={classNames({
				'form-field__datepicker': true,
				[className]: className,
			})}
		/>
	</InputGroup>
	</div>
);