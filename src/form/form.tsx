/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/ban-types */
import {Button, Stack} from '@mui/material';
import type {FieldConfig} from 'formik';
import {Field, Formik} from 'formik';
import {TextField} from 'formik-mui';
import React, {useMemo} from 'react';

export type FormProps<T> = {
	renderMap: Map<keyof T, {label?: string; component?: FieldConfig['component']}>;
	// @ts-ignore
	validate: (v: Partial<T> | T) => Promise<{[key: keyof T]: string}> | void;
	onSubmit: (v: T) => void;
	initialValue?: T;
};

export function Form<T extends object>({renderMap, validate, onSubmit, initialValue}: FormProps<T>) {
	const mapEntry = Array.from(renderMap.entries());

	const empty = useMemo(() => mapEntry.reduce((acc, [key]) => {
		acc.set(key, '');

		return acc;
	}, new Map()), []);

	return <Formik initialValues={initialValue || Object.fromEntries(empty.entries()) as T} validate={validate} onSubmit={onSubmit}>
		{({submitForm}) => <Stack spacing={2}>
			{mapEntry.map(([key, meta]) => <Field
				component={meta.component || TextField}
				key={key}
				name={key}
				label={meta.label || key}
			/>)}

			<Button onClick={submitForm}>ok</Button>
		</Stack>}
	</Formik>;
}
