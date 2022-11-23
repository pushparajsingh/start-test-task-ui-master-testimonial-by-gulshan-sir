import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Service/Config'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import TestimonialModal from '../../Components/Testimonial/TestimonialModal'

const ManageTestimonial = (props) => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false)
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        getTestimonials();
    }, [])
  
    const getTestimonials = async() => {
        const result = await axiosInstance.get(`all`);
        try{
            if(result.status===200){
                setTestimonials([...result?.data])
            }
        }catch(error){
            console.log('list error', error)
        }
    }


  const deleteUser = async(id) => {
    const result = await axiosInstance.delete(`/delete/${id}`);
    try{
        if(result.status===200){
            toast.success('Deleted successfully.');
            getTestimonials();
        }
    }catch(error){
        console.log('delete error', error)
    }
  }

  const refetchList = () => {
    getTestimonials()
  }

  return (
      <div className="container table-responsive py-5">
        <ToastContainer />
        <div className="text-right">
            <button 
                type="button" 
                className="btn btn-primary mb-3 mr-3" 
                onClick={()=>navigate('/')}
            >
            Back
            </button>
            <button 
                type="button" 
                className="btn btn-primary mb-3" 
                data-toggle="modal" 
                data-target="#exampleModal" 
                onClick={()=>setOpenModal(true)}
            >
            Create
            </button>
        </div>
        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Post</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    testimonials?.length>0 ? testimonials?.map((item, key) => {
                        return (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>
                            <img
                                height="40"
                                width="40"
                                alt=''
                                src={item.Photo.file}
                            />
                            <span className="ms-2">{item?.Name}</span></td>
                            <td>{item?.Post}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-primary mr-3" 
                                    data-toggle="modal" 
                                    data-target="#exampleModal" 
                                    onClick={() => setOpenModal(item)}
                                >
                                    Edit
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-info" 
                                    onClick={() => deleteUser(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        )
                    }) :
                    <tr>
                        <td colSpan={4} className='text-center'>No record found</td>
                    </tr>
                }
            </tbody>
        </table>
        {openModal && 
            <TestimonialModal 
                setOpenModal={setOpenModal} 
                data={openModal} 
                refetchList={refetchList}
            />
        }
      </div>
  )
}

export default ManageTestimonial;