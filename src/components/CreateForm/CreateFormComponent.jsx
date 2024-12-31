import PropTypes from 'prop-types';
import { CreateForm } from './CreateFormStyled.jsx';

const CreateFormComponent = ({ handleSubmit, onSubmit, register, errors, title, value }) => {
    return (
        <CreateForm onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>
            <textarea
                placeholder="Insert a text"
                {...register("text")}
            />
            {errors.text && <span>{errors.text.message}</span>}

            <label htmlFor="url">Image URL:</label>
            <input
                type="text"
                id="url"
                placeholder="Insert an image link here"
                {...register("banner")}
            />
            {errors.banner && <span>{errors.banner.message}</span>}

            <input type="submit" value={value} id="submit" />
        </CreateForm>
    );
};

CreateFormComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default CreateFormComponent;