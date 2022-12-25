import { Button, Checkbox, Divider } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Workout', 'Breakfast', 'Lunch', 'Dinner'];
const WorkoutForm: React.FC<{onFinish: any}> = (props: {onFinish: any}) => {
    const [checkedList, setCheckedList] = React.useState<CheckboxValueType[]>();
    const [indeterminate, setIndeterminate] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
    
    const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    };
    
    const onClick = () => {
        props.onFinish(checkedList);
    }

    return(

 
    <>
        <div style={{marginBottom: 20}}>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                <strong>Check all</strong>
            </Checkbox>
        </div>
        <div style={{marginBottom: 20}}>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
        <div style={{marginBottom: 20}}>
            <Button type="primary" onClick={onClick} htmlType="button">
                Add Workout
            </Button>
        </div>
    </>

    )
}

export default WorkoutForm;
