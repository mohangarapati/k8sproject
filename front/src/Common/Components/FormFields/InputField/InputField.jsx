import React from 'react';
import classNames from 'classnames';
import { Field } from 'redux-form';
import { Input } from 'semantic-ui-react';
// import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import {
    faClock,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import FormField from '../FormField';

import '../FormFields.scss';

// export default ({
// 	className,
// 	icon,
// 	...props
// }) => (
// 	<InputGroup>
// 	{icon != null &&
// 		<InputGroupAddon addonType="prepend">
// 			<div className="input-group-text">
// 				{icon}
// 			</div>
// 		</InputGroupAddon>
// 		}
// 		<Field
// 			component={FormField}
// 			as={Input}
// 			{...props}
// 			className={classNames({
// 				'form-field__text-input': true,
// 				[className]: className,
// 			})}
// 		/>
// 	</InputGroup>
// );
export default ({
	className,
	icon,
	...props
}) => (
		<Field
			component={FormField}
			as={Input}
			{...props}
			className={classNames({
				'form-field__text-input': true,
				[className]: className,
			})}
		/>
);
