using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LotteryManager : MonoBehaviour
{
    [SerializeField]
    private Transform item_root;
    [SerializeField]
    private Transform node_run;

    private int start_index;
    private int end_index;
    private int turns;
    private List<Transform> path_list;
    private int next_index;

    private float step_speed;
    private float step_speed_reduce;
    private float step_time;
    private float step_distance;

    private bool is_run;

    // Start is called before the first frame update
    void Start()
    {
        start_index = Mathf.FloorToInt(Random.Range(0.0f, item_root.childCount));
        Debug.Log("start_index:" + start_index);

        node_run.position = item_root.GetChild(start_index).position;
        is_run = false;
    }

    public void ButtonStartClick()
    {
        if(!is_run)
        {
            end_index = Mathf.FloorToInt(Random.Range(0, item_root.childCount));
            Debug.Log("end_index:" + end_index);

            turns = Mathf.FloorToInt(Random.Range(1, 3)) + 1;
            Debug.Log("turns:" + turns);

            next_index = 1;
            is_run = true;
            ShowRunAnimation();
        }
    }

    void ShowRunAnimation()
    {
        path_list = new List<Transform>();

        for (int i = start_index; i < item_root.childCount; i++)
        {
            path_list.Add(item_root.GetChild(i).transform);
        }

        for(int j = 0; j < turns; j++)
        {
            for (int i = 0; i < item_root.childCount; i++)
            {
                path_list.Add(item_root.GetChild(i).transform);
            }
        }

        for (int i = 0; i < end_index; i++)
        {
            path_list.Add(item_root.GetChild(i).transform);
        }

        Debug.Log("Count " + path_list.Count);

        step_speed = 5000;
        step_speed_reduce = step_speed / (path_list.Count - 1);

        StartCoroutine(RunToNext());
    }

    private IEnumerator RunToNext()
    {
        while (true)
        {
            if (next_index >= path_list.Count)
            {
                start_index = end_index;
                is_run = false;
                yield break;
            }
            else
            {
                step_distance = Vector3.Distance(node_run.position, path_list[next_index].position);
                step_time = step_distance / step_speed;

                yield return new WaitForSeconds(step_time);
                node_run.position = path_list[next_index].position;

                step_speed -= step_speed_reduce;
                next_index++;
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
