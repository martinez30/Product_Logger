import { Routes } from '@/constants/Routes';
import { Button, Row, Table } from '@nextui-org/react';
import Link from 'next/link';

export default function Products() {
    const columns = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "role",
            label: "ROLE",
        },
        {
            key: "status",
            label: "STATUS",
        },
    ];
    const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            role: "CEO",
            status: "Active",
        },
        {
            key: "2",
            name: "Zoey Lang",
            role: "Technical Lead",
            status: "Paused",
        },
        {
            key: "3",
            name: "Jane Fisher",
            role: "Senior Developer",
            status: "Active",
        },
        {
            key: "4",
            name: "William Howard",
            role: "Community Manager",
            status: "Vacation",
        },
    ];

    return (
        <section style={{ width: "90%", margin: "0 auto" }}>
            <Row style={{ gap: 20, marginTop: 20, display: 'flex', justifyContent: "flex-end" }}>
                <Link href={Routes.NEW_SHOP}>
                    <Button shadow color="success" auto>Efeatuar nova Compra</Button>
                </Link>
            </Row>
            <Table
                aria-label="Example table with dynamic content"
                css={{ height: "auto" }}
                selectionMode='single'
                compact
            >
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column key={column.key}>{column.label}</Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={rows}>
                    {(item: any) => (
                        <Table.Row key={item.key} css={{ cursor: "pointer" }}>
                            {(columnKey: any) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                        </Table.Row>
                    )}
                </Table.Body>
                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={5}
                    onPageChange={(page) => console.log({ page })}
                />
            </Table>
        </section>
    );
}