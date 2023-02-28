import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsChat, BsPencil } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import MessageCard from "../components/MessageCard";
import ProfileInfoCard from "../components/ProfileInfo";
import { conversationsData } from "../data/conversations-data";
import { projectsData } from "../data/projects-data";
import { platformSettingsData } from "../data/platform-settings";
import Navbar from "../components/Navbar";
export function User() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="relative mt-16 pt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3  mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="https://imgs.search.brave.com/loxLMHzPFMRkXU9FB1oW4pkw_t9qb10xHQ4ufsV9eFU/rs:fit:860:692:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzUyLTUy/NjIzN19hdmF0YXIt/cHJvZmlsZS1oZC1w/bmctZG93bmxvYWQu/cG5n"
                alt="bruce-mars"
                size="sm"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40 h-20"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Richard Davis
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
          </div>

          <div className="mb-12  gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              details={{
                "first name": "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
            />
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Rules and Regulations
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Here is a list of rules for you to follow
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default User;
