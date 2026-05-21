export async function getStrapiData() {
    const response = await fetch(`http://localhost:1337/api/aktualnoscis`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer d4f94f06063bc35e5ab58004bc76fadb978eecbe35eec5d1299a1b96be5ccf820907eaffd2bd1c5a8292a11877dc53aa15dcac5a5a58a7279f4e42cf9916688d17f80b79f7afebf41b3743199f975d42577a12af8b75c56ddf5630cb77db836fc79ca1c54105718e9ca180c469686b2afe97ce8068735f4f4557809ec143531c`
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
}