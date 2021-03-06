//login
export const authUser = async (setUser) => {
  if (localStorage.MyToken) {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
      });
      const data = await response.json();
      setUser(data.username);
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchUsers = async (
  e,
  username,
  email,
  pass,
  name,
  surname,
  street,
  city,
  postcode,
  setUser,
  setUserAdmin,
  setUserFetch
) => {
  e.preventDefault();
  try {
    let response;
    if (email) {
      response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: pass,
          name: name,
          surname: surname,
          street: street,
          city: city,
          postcode: postcode,
        }),
      });
    } else {
      response = await fetch(
        `${process.env.REACT_APP_REST_API}users/${username}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: pass,
          }),
        }
      );
    }
    // if (response.status !== 200) {
    //   throw response.message;
    // }
    const data = await response.json();
    localStorage.setItem("MyToken", data.token);
    if (data.user.admin === true) {
      setUserAdmin(data.user.admin);
    } else {
      setUser(data.user);
      setUserFetch(data);
    }
  } catch (error) {
    console.log(error);
      document.getElementById("message").innerHTML = "Check All Fields Are Filled Or Username And/Or Email Already In Use";
        setTimeout(function () {
          document.getElementById("message").innerHTML = "";
        }, 3000);
  }
};

//stock
export const findAllFish = async (setStock) => {
  let response;
  try {
    response = await fetch(`${process.env.REACT_APP_REST_API}fishAll`);
    const data = await response.json();
    setStock(data);
  } catch (error) {
    console.log(error);
  }
};

//Users
export const updateUserDetails = async (
  e,
  email,
  password,
  name,
  surname,
  street,
  city,
  postcode,
  user,
  setUser
) => {
  e.preventDefault();

  try {
    let response;
    response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        surname: surname,
        street: street,
        city: city,
        postcode: postcode,
        currentUser: user,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data);
    document.getElementById("message").innerHTML = "Profile Updated Successfully";
  } catch (error) {
    console.log(error);
    document.getElementById("message").innerHTML = error;
  }
};

export const deleteUser = async (user, setUser) => {
  try {
    let response;
    if (user) {
      response = await fetch(`${process.env.REACT_APP_REST_API}users/${user}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.removeItem("MyToken")}`,
        },
        username: user,
      });
    }
    await response.json();
    setUser();
  } catch (error) {
    console.log(error);
  }
};

//admin
export const createFish = async (
  e,
  name,
  scientific,
  img,
  habitat,
  description,
  temperature,
  temperament,
  foodsource,
  social,
  breeding,
  quantity,
  price,
  setStock
) => {
  e.preventDefault();
  try {
    let response;
    let compatibility = {
      temperature: temperature,
      temperament: temperament,
      foodsource: foodsource,
      social: social,
      breeding: breeding,
    };
    response = await fetch(`${process.env.REACT_APP_REST_API}fish`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        scientific: scientific,
        img: img,
        habitat: habitat,
        description: description,
        compatibility: compatibility,
        quantity: quantity,
        price: price,
      }),
    });
    if (response.status !== 200) {
      throw response.message;
    }
      const data = await response.json();
      setStock(data);
      console.log(response)
      document.getElementById("message").innerHTML =  "Item Created Successfully";
  } catch (error) {
    document.getElementById("message").innerHTML = "Check required fields have data";
  }
};

export const findFish = async (e, name, setUpdateStock) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}fish/${name}`,
      {
        method: "GET",
      }
    );
     if (response.status !== 200) {
       throw response.message;
     }
    const data = await response.json();
    setUpdateStock(data);
    document.getElementById("message").innerHTML = "Item Name Found Successfully";
    console.log(data);
  } catch (error) {
    console.log(error);
    document.getElementById("message").innerHTML = "Fish Name Not Found";
  }
};

export const updateFish = async (
  e,
  name,
  scientific,
  img,
  habitat,
  description,
  temperature,
  temperament,
  food,
  social,
  breeding,
  quantity,
  price,
  setStock
) => {
  e.preventDefault();
  try {
    let response;
    let compatibility = {
      temperature: temperature,
      temperament: temperament,
      foodsource: food,
      social: social,
      breeding: breeding,
    };
    response = await fetch(`${process.env.REACT_APP_REST_API}fish`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        scientific: scientific,
        img: img,
        habitat: habitat,
        description: description,
        compatibility: compatibility,
        quantity: quantity,
        price: price,
      }),
    });
     if (response.status !== 200) {
       throw response.message;
     }
    const data = await response.json();
    setStock(data);
    document.getElementById("message").innerHTML =
      "Item Updated Successfully";
    console.log(data)
  } catch (error) {
    console.log(error);
     document.getElementById("message").innerHTML = "Check Update Fields";
  }
};

export const deleteStock = async (e, del, setStock) => {
  e.preventDefault();
  try {
    let response;
    response = await fetch(`${process.env.REACT_APP_REST_API}fish/${del}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: del,
      }),
    });
    if (response.status !== 200) {
      throw response.message;
    }
    await response.json();
    setStock();
     document.getElementById("message").innerHTML = "Item Deleted Successfully";
  } catch (error) {
    console.log(error);
    document.getElementById("message").innerHTML = "Check Field Data or Fish Not Found";
  }
};
