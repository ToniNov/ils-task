import React, { useEffect } from 'react';

import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { selectRoute } from '../../redux/features/currentRoute/currentRouteSlice';
import { fetchData } from '../../redux/features/routes/routesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { routesSelector } from '../../redux/selectors';
import { ErrorNotification } from '../XErroNotification/XErroNotification';

export interface DataTableType {
  key: string;
  route: string;
  point1: number[];
  point2: number[];
  point3: number[];
}

export const XTable: React.FC = () => {
  const { routes, isLoading, error } = useAppSelector(routesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dataSource: DataTableType[] = routes.map((el) => ({
    key: el.id,
    route: `Route ${el.id}`,
    point1: [el.points[0].lat, el.points[0].lng],
    point2: [el.points[1].lat, el.points[1].lng],
    point3: [el.points[2].lat, el.points[2].lng],
  }));

  const columns: ColumnsType<DataTableType> = [
    {
      title: 'Route',
      dataIndex: 'route',
      key: 'route',
      width: '70px',
      align: 'center',
    },
    {
      title: 'Point 1 (lat, lng)',
      dataIndex: 'point1',
      key: 'point1',
      width: '70px',
      align: 'center',
      render: (point1) => (
        <>
          {point1.map((point: number) => (
            <Tag key={point}>{point}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Point 2 (lat, lng)',
      dataIndex: 'point2',
      key: 'point2',
      width: '70px',
      align: 'center',
      render: (point2) => (
        <>
          {point2.map((point: number) => (
            <Tag key={point}>{point}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Point 3 (lat, lng)',
      dataIndex: 'point3',
      key: 'point3',
      width: '70px',
      align: 'center',
      render: (point3) => (
        <>
          {point3.map((point: number) => (
            <Tag key={point}>{point}</Tag>
          ))}
        </>
      ),
    },
  ];

  const handelSelect = (record: DataTableType): void => {
    dispatch(selectRoute(record));
  };

  if (error !== '') {
    return <ErrorNotification error={error} />;
  }

  return (
    <Table
      size="middle"
      loading={isLoading === 'loading'}
      bordered
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 'max-content' }}
      rowSelection={{ type: 'radio', onSelect: handelSelect }}
    />
  );
};
