// Core
import * as Yup from 'yup';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useForm  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';


const validationSchema = Yup.object().shape({
    field1: Yup.string(),
    field2: Yup.string(),
    field3: Yup.string(),
});


const SampleForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            field1: 'Sample 1',
            field2: 'Sample 2',
            field3: 'Sample 3',
        },
    });


    const onSubmit = handleSubmit((values) => {
        console.log('Sbumitting', values);
    });


    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <label className="label" htmlFor="field1">Field 1</label>
                <input ref={register} className="form-control" id="field1" name="field1" type="text" />
            </div>

            <div className="form-group">
                <label className="label" htmlFor="field2">Field 2</label>
                <input ref={register} className="form-control" id="field2" name="field2" type="text" />
            </div>

            <div className="form-group">
                <label className="label" htmlFor="field3">Field 3</label>
                <input ref={register} className="form-control" id="field3" name="field3" type="text" />
            </div>

            <div className="form-group">
                <button className="btn btn-primary btn-block block" type="submit">Submit fields</button>
            </div>
        </form>
    );
};


const App = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <div className="card my-5">
                    <div className="card-body">
                        <SampleForm />
                    </div>
                </div>
            </div>
        </div>
    </div>

);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
