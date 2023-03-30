import React from "react";

const UsersList = (props: any) => {
  const { users } = props;
  return (
    <div>
      {users?.length ? (
        users?.map((user: any, index: number) => (
          <div key={user.userName} className="text-sm my-2 border rounded-md ">
            User #{index + 1}
            <p>
              <span className="font-medium text-indigo-300">User Name :: </span>{" "}
              {user.userName}
            </p>
            <p>
              <span className="font-medium text-indigo-300">Password :: </span>{" "}
              {user.password}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center mt-5 text-2xl font-medium text-red-400">
          No Users at the moment!
        </p>
      )}
    </div>
  );
};

export default UsersList;
