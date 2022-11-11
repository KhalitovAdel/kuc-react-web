import React from 'react';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Order } from '../entities';
import { MetadataOptions, propertiesKey, propertyMetadata } from '../metadata';
import { Button } from '@mui/material';

export const Form = () => {
    return <Formik initialValues={{}} onSubmit={(v) => console.log(v)}>
        {({ submitForm }) => <>
            {(Reflect.getMetadata(propertiesKey, Order.prototype) || []).map((key: string) => {
                const meta: MetadataOptions | undefined = Reflect.getMetadata(propertyMetadata, Order.prototype, key);
                if (!meta) return null;

                return <Field 
                    component={TextField}
                    key={key}
                    name={key}
                    label={key}
                />
            })}

            <Button onClick={submitForm}>ok</Button>
        </>}
    </Formik>
}