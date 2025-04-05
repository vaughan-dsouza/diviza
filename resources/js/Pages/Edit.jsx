import {useForm, Head} from '@inertiajs/react';
import {useRoute} from "vendor/tightenco/ziggy"

const Edit = ({post}) => {
    const {data, setData, put, errors, processing } = useForm({
        body: post.body,
    });
    const route = useRoute();
    // console.log(errors);

    function submit(e){
        e.preventDefault()
        // put(`/posts/${post.id}`);
        put(route('posts.update', post));

    }
  return (
    <>
    <Head title="Edit" />

    <h1 className='title' >Edit</h1>

    <div className="w-1/2 mx-auto">
        <form onSubmit={submit}>
            <textarea name="body" 
            id="primary" 
            rows="6" 
            value={data.body}
            onChange={(e) => setData("body", e.target.value)}
            className= {errors.body &&'!ring-red-500'}
            >
            </textarea>

            {errors.body && <p className="error">{errors.body}</p>}
            <button className="primary-btn mt-4" disabled={processing}>Edit post</button>
        </form>
    </div>
    </>
  )
}

export default Edit