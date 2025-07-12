import React,{usesEffect} from 'react'

const Effect = () => {
    const {products,setproducts} = useState(); 
    useEffect(()=> {
        const fetchData =async () => {
            const response=await fetch()
            const data=await response.json();
            setproducts(data);
        };
        fetchData();
    };[]);
  return (
    <div>
      <h1>hii</h1>
      <u1>
        {products,Map((product) => {
            <li key={product.id}>
                <p>{product.tittle}</p>
            </li>
        })}
      </u1>
    </div>
  );
};

export default Effect
