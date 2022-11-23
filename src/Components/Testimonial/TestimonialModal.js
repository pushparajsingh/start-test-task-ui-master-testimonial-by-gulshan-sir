import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './TestimonialCardStyle.css'
import axiosInstance from '../../Service/Config'
import { ToastContainer, toast } from 'react-toastify';

 const validationSchema = Yup.object().shape({
   name: Yup.string()
     .min(5, 'Too Short!')
     .max(30, 'Too Long!')
     .required('Required'),
   description: Yup.string()
     .min(100, 'Too Short!')
     .max(300, 'Too Long!')
     .required('Required'),
 });

 const defaultImage = 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'

const TestimonialModal = ({setOpenModal, data, refetchList}) => {

    const initialValues = {
        name: data?.Name ?? '',
        description: data?.Description ?? '',
        active: data?.Active ? true : false,
        post: data?.post ?? 'CEO',
    }
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState('')
    const [image, setImage] = useState('')

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            var formData = new FormData()
            formData.append('Photo', file ? file : image);
            formData.append('Name', values?.name);
            formData.append('Post', values?.post);
            formData.append('Description', values?.description);
            formData.append('Active', values?.active ? 1 : 0);
            setLoading(true)
            createTestimonial(formData)
            if(data?._id){
                formData.append('_method', 'post')
                updateTestimonial(formData)
            }

        },
   });

    useEffect(()=>{
        if(data?._id){
            setImage(data?.Photo?.file)
        }
    },[data])

   const createTestimonial = async(formData) => {
        const result = await axiosInstance.post('post', formData)
        setLoading(false)
        try{
            if(result.status===200){
                toast.success('Created successfully.');
                const el = document.getElementById('close-modal')
                el.click()
                refetchList()
            }else if(result?.error){
                toast.error(result?.error);
            }
        }catch(error){
            toast.error("Something went wrong, Please try again.");
        }
   }

   const updateTestimonial = async(formData) => {
        const result = await axiosInstance.put(`update/${data._id}`, formData)
        setLoading(false)
        try{
            if(result.status===200){
                toast.success('Updated successfully.');
                const el = document.getElementById('close-modal')
                el.click()
                refetchList()
            }else if(result?.error){
                toast.error(result?.error);
            }
        }catch(error){
            toast.error("Something went wrong, Please try again.");
        }
   }

   const handleImage = (event) => {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();
        
        setFile(selectedFile)
        var img = document.getElementById("file");

        reader.onload = function(event) {
            img.src = event.target.result;
            setImage(event.target.result)
        };

        reader.readAsDataURL(selectedFile);
   }

    return(
        <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <ToastContainer />
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Form</h5>
                        <button 
                            id='close-modal'
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={()=>setOpenModal(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form 
                        onSubmit={formik.handleSubmit} 
                        className="needs-validation" 
                        noValidate
                        id='testimonial-form'
                    >
                        <div className="modal-body">
                            <div className="form-check mt-3 mb-3">
                                <div className='image-wrapper'>
                                    <div className='action'>
                                        <input 
                                            type="file"
                                            id="file"
                                            name='file'
                                            accept="image/*"
                                            onChange={handleImage}
                                        />
                                        <button type='button'>
                                            <i className="lni lni-camera"/>
                                        </button>
                                    </div>
                                    <img src={image ? image : defaultImage} alt=''/>                                    
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name"
                                    name='name'
                                    placeholder="Type here"
                                    value={formik?.values?.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik?.touched?.name && formik?.errors?.name && (
                                    <div className="invalid-feedback d-block">
                                        {formik.errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="post">Select post by</label>
                                <select 
                                    className="form-control" 
                                    id="post"
                                    name='post'
                                    onChange={formik.handleChange}
                                    value={formik?.values?.post}
                                >
                                    <option value='CEO'>CEO</option>
                                    <option value='CTO'>CTO</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    type="text" 
                                    className="form-control" 
                                    name='description'
                                    id='description'
                                    placeholder="Type here"
                                    value={formik?.values?.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik?.touched?.description && formik?.errors?.description && (
                                    <div className="invalid-feedback d-block">
                                        {formik.errors.description}
                                    </div>
                                )}
                            </div>
                            <div className="form-check mt-3 mb-3">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="active"
                                    name='active'
                                    value={formik?.values?.active}
                                    checked={formik?.values?.active}
                                    onChange={(e)=>formik.setFieldValue('active', e.target.value==='false' ? true : false)}
                                />
                                <label className="form-check-label" htmlFor="active">Active</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-dismiss="modal"
                                disabled={loading}
                                onClick={()=>setOpenModal(false)}
                            >
                                Close
                            </button>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TestimonialModal;