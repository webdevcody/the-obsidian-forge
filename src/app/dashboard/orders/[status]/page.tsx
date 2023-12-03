"use client";

import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { redirect } from "next/navigation";
import { DateTime } from "luxon";
import { ViewOrderDialog } from "./_components/view-order-dialog";
import { useSession } from "@clerk/clerk-react";

const orders = ["new", "inProgress", "readyForPickup", "completed"] as const;
type OrderTypes = (typeof orders)[number];

export default function DashboardPage({
  params,
}: {
  params: { status: string };
}) {
  if (
    !["new", "inProgress", "readyForPickup", "completed"].includes(
      params.status
    )
  ) {
    return redirect("/dashboard/orders/new");
  }

  const isAdmin = !!(useSession().session?.publicUserData as any)?.isAdmin;

  if (!isAdmin) {
    return redirect("/");
  }

  const status = params.status as OrderTypes;

  const setStatusMutation = useMutation(api.orders.setOrderStatus);
  const orders = useQuery(api.orders.getOrders, {
    status,
  });

  const titlesByStatus: Record<OrderTypes, string> = {
    new: "New",
    completed: "Completed",
    inProgress: "In Progress",
    readyForPickup: "Ready for Pickup",
  };

  const title = titlesByStatus[status];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm leading-snug text-gray-500 dark:text-gray-400">
          {!orders || orders.length === 0 ? (
            <div>No Orders</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders?.map((order) => {
                  return (
                    <TableRow key={order._id}>
                      <TableCell>
                        <ViewOrderDialog order={order} />
                      </TableCell>
                      <TableCell>{order.user.name}</TableCell>
                      <TableCell>{order.user.email}</TableCell>
                      <TableCell>
                        {DateTime.fromMillis(order._creationTime).toFormat(
                          "LLL dd, yyyy hh:MM a"
                        )}
                      </TableCell>
                      <TableCell>
                        {status === "new" && (
                          <Button
                            onClick={() => {
                              setStatusMutation({
                                orderId: order._id,
                                status: "inProgress",
                              });
                            }}
                          >
                            Move to In Progress
                          </Button>
                        )}
                        {status === "inProgress" && (
                          <Button
                            onClick={() => {
                              setStatusMutation({
                                orderId: order._id,
                                status: "readyForPickup",
                              });
                            }}
                          >
                            Set Ready for Pickup
                          </Button>
                        )}
                        {status === "readyForPickup" && (
                          <Button
                            onClick={() => {
                              setStatusMutation({
                                orderId: order._id,
                                status: "completed",
                              });
                            }}
                          >
                            Mark as Completed
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
