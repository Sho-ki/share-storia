import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

interface Data {
    id: number;
    title: string;
    //front: boolean;
    message: string;
}

const fetchData = async (): Promise<Data> => {
    const response = await fetch('/api/resumate/documents');
    const data = await response.json();
    console.log(`Fetched data 1: ${data}`);
    return data;
};

const MyPage =() => {
    const [data, setData] = useState<Data | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
                console.log(`Fetched data 2: ${data}`);
            } catch (error) {
                setError(true);
            }
        };
        getData();
    }, []);

    if (error) {
        return <div>Something went wrong</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    /*
    // remove the case of search-form?
    if (data.map((item) => item.message)) {
        return <div>Loading...</div>;
    }
    */

    return (
        <div>
            <div key={data.id}>
                <p>{data.title}</p>
                <p>{data.message}</p>
            </div>
        </div>
    );
};


/*
const MyPage: NextPage = () => {
  const [data, setData] = useState<object>({});

  useEffect(() => {
    fetch('/api/resumate/documents')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};


*/
export default MyPage;
